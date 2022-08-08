package com.example.server.controllers;


import com.example.server.payloads.response.ResponseObject;
import com.example.server.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/api/v1/file")
public class FileController {

    private FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("")
    public ResponseEntity<ResponseObject> uploadFile(@RequestParam("file")MultipartFile file){
        try{
            String generatedFileName=fileService.storeFile(file);
            byte[] result=fileService.readFileContent(generatedFileName);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("ok","upload successfully",  result));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(new ResponseObject("failed",e.getMessage(),""));
        }
    }
}
