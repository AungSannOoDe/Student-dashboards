"use client";

import React, { useEffect, useCallback } from "react";
i
const CkEditor = ({
  editorData,
  setEditorData,
  handleOnUpdate,
  fieldName = "description",
}) => {


  

  useEffect(() => {
    console.log("Editor data updated:", editorData);
  }, [editorData]);

  return (
    <div className="ckeditor-container">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={editorData}
        onChange={handleChange}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onFocus={() => console.log("Editor focused")}
        onBlur={() => console.log("Editor blurred")}
      />
    </div>
  );
};

export default CkEditor;