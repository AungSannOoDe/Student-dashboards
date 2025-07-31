import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Highlighter, Italic, Redo, Undo } from 'lucide-react'
import React from 'react'
import { Toggle } from './ui/toggle'
import "../styles/textEditor.css"

const MenuBar = ({editor}) => {
    if (!editor) {
        return null
      }
    
      const options=[
        {   icon:<Heading1 className="size-4"/>,
            onClick:() => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            preesed:editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
        },
        {
            icon:<Heading2 className="size-4"/>,
            onClick:() => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            preesed:editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
        },
        {
            icon:<Heading3 className="size-4"/>,
            onClick:() => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    preesed:editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
        },{
            icon:<Bold className="size-4"/>,
            onClick:() => editor.chain().focus().toggleBold().run(),
            preesed:editor.isActive('bold') ? 'is-active' : ''
        },
        {
            icon:<Italic className="size-4"/>,
            onClick:() => editor.chain().focus().toggleItalic().run(),
            preesed:editor.isActive('italic') ? 'is-active' : ''
        },{
           icon:<Highlighter className="size-4"/>,
           onClick:() => editor.chain().focus().toggleHighlight().run(),
           preesed:editor.isActive('highlight') ? 'is-active' : ''
        },{
            icon:<AlignLeft className="size-4"/>,
            onClick:()=>editor.chain().focus().setTextAlign('left').run(),
            preesed:editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
        },
        {
             icon:<AlignCenter className="size-4"/>,
            onClick:()=>editor.chain().focus().setTextAlign('center').run(),
            preesed:editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
        },{
            icon:<AlignRight className="size-4"/>,
            onClick:()=>editor.chain().focus().setTextAlign('right').run(),
            preesed:editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
        },
        {
            icon:<AlignJustify className="size-4"/>,
            onClick:()=>editor.chain().focus().setTextAlign('justify').run(),
            preesed:editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
        }
      ]
    return(
    <div className="border rounded-md p-1 mb-1 bg-slate-50 space-x-2 z-50">
        {
            options.map((option,index)=>(
                <Toggle key={index} preesed={option.preesed} onPressedChange={option.onClick}>{option.icon}</Toggle>
            ))
        }
<Toggle>Hello</Toggle>
    </div>
      )
}

export default MenuBar