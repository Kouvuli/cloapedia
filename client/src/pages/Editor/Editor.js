import { Grid } from "@mui/material"
import React, { useState } from "react"
// import { EditorState } from "draft-js"
// import { Editor } from "react-draft-wysiwyg"
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import "draft-js/dist/Draft.css"

const TextEditor = ({ onSubmit }) => {
  const [body, setBody] = useState("")
  const API_URl = "http://localhost:9090"
  const UPLOAD_ENDPOINT = "api/v1/file"
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ body })
  }
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then((file) => {
            body.append("file", file)
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnb2RvZndhciIsImlhdCI6MTY1OTk2Njk5MiwiZXhwIjoxNjYwMDUzMzkyfQ.7-WJsU-vJc2qaz5pFihTxjS2AltZ-wJWHnwR1WxY54CwRKfuZhUiKmVGdKCXajYblIY6h-3zj_Gf-HIY9sjbhw"
              },
              body: body
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URl}/${UPLOAD_ENDPOINT}/uploads/${res.data}`
                })
              })
              .catch((err) => {
                reject(err)
              })
          })
        })
      }
    }
  }
  // ClassicEditor.defaultConfig = {
  //   toolbar: {
  //     items: [
  //       "bold",
  //       "italic",
  //       "|",
  //       "bulletedList",
  //       "numberedList",
  //       "indent",
  //       "outdent",
  //       "|",
  //       "heading",
  //       "|",
  //       "undo",
  //       "redo"
  //     ]
  //   }
  // }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }
  return (
    <Grid container justifyContent="center" padding={{ xs: "10px", sm: "0px" }}>
      <Grid item md={6} sm={9} xs={12}>
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <CKEditor
              config={{
                extraPlugins: [uploadPlugin]

                // toolbar: {
                //   items: [
                //     "bold",
                //     "italic",
                //     "|",
                //     "bulletedList",
                //     "numberedList",
                //     "indent",
                //     "outdent",
                //     "|",
                //     "heading",
                //     "|",
                //     "undo",
                //     "redo"
                //   ]
                // }
              }}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setBody(data)
                console.log(data)
              }}
            />
          </div>

          <button
            style={{ width: "100%" }}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Grid>
    </Grid>
  )
}

export default TextEditor
