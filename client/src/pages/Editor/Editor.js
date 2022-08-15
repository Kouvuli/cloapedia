import { Grid } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
// import { EditorState } from "draft-js"
// import { Editor } from "react-draft-wysiwyg"
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import "draft-js/dist/Draft.css"
import blogSlice, {
  createBlog,
  uploadImage
} from "../../redux/reducers/blogSlice"
import { useDispatch, useSelector } from "react-redux"
// import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed"
import styles from "./styles.module.scss"
import DefaultThumbnail from "../../assets/images/default-thumbnail.jpg"
import cloapediaApi from "../../apis/cloapediaApi"
import { blogSelector } from "../../redux/selectors"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars/CustomizedSnackbars"
const TextEditor = ({ onSubmit }) => {
  const dispatch = useDispatch()
  const { currentUser, loading, error, success } = useSelector(blogSelector)
  const [content, setContent] = useState("")

  const [headline, setHeadline] = useState("")
  const [trailText, setTrailText] = useState("")
  const [thumbnail, setThumbnail] = useState(null)

  const thumbnailRef = useRef(null)

  useEffect(() => {
    dispatch(
      blogSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      content === "" ||
      headline === "" ||
      trailText === "" ||
      thumbnail == null
    ) {
      return false
    }
    const body = new FormData()

    body.append("file", thumbnail)
    cloapediaApi.uploadFile(body).then((res) => {
      dispatch(
        createBlog({
          author: { id: currentUser.id },
          headline,
          trail_text: trailText,
          thumbnail: res.data,
          content
        })
      )
    })
  }
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()

          loader.file.then((file) => {
            body.append("file", file)
            try {
              cloapediaApi
                .uploadFile(body)
                .then((res) => {
                  resolve({
                    default: res.data
                  })
                })
                .catch((err) => {
                  reject(err)
                })
            } catch (err) {}
          })
        })
      }
    }
  }
  const thumbnailHandler = (e) => {
    const file = e.target.files[0]
    if (file) {
      thumbnailRef.current.src = URL.createObjectURL(file)
      setThumbnail(file)
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
    <Grid
      container
      justifyContent="center"
      marginTop="20px"
      marginBottom="60px"
      padding={{ xs: "10px", sm: "0px" }}
    >
      <Grid item md={6} sm={9} xs={12}>
        {success && (
          <CustomizedSnackbars
            title="Insert new blog successfully!"
            type="success"
          />
        )}
        {error && (
          <CustomizedSnackbars title="Insert new blog failed!" type="error" />
        )}
        <form className="form-group">
          <div className="form-group">
            <label>Headline</label>
            <input
              type="text"
              className="form-control"
              value={headline}
              onChange={(e) => {
                setHeadline(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label>Trailer Text</label>
            <input
              className="form-control"
              value={trailText}
              onChange={(e) => {
                setTrailText(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label>Thumbnail</label>
            <img
              ref={thumbnailRef}
              src={DefaultThumbnail}
              alt="thumbnail"
              className={styles["thumbnail"]}
            />
            <input
              type="file"
              className="form-control"
              onChange={thumbnailHandler}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <CKEditor
              config={{
                extraPlugins: [uploadPlugin],
                mediaEmbed: {
                  previewsInData: true
                }

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
                setContent(data)
              }}
            />
          </div>

          <button
            style={{ width: "100%" }}
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </Grid>
    </Grid>
  )
}

export default TextEditor
