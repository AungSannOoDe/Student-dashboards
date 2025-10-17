// CommentEditing.jsx
"use client";
import React, { useImperativeHandle, forwardRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import Paragraph from '@tiptap/extension-paragraph';
import MenuBar from './MenuBar';

const CommentEditing = forwardRef(({ onChange,description }, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: true }),
    ],
    content: description || '', 
    editorProps: {
      attributes: {
        class: "min-h-[165px] border border-stone-500 bg-slate-50 y-2 px-3",
      },
    },
     immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  // Expose reset method to parent
  useImperativeHandle(ref, () => ({
    resetContent: () => {
      editor?.commands.setContent('');
    }
  }), [editor]);

  return (
    <div className="editor-container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
});

export default CommentEditing;
