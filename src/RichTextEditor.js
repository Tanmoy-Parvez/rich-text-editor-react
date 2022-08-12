import JoditEditor from 'jodit-react';
import React from 'react';
import { useRef } from 'react';

const RichTextEditor = ({ setValue }) => {
    const editor = useRef(null)

    return (

        <div className="mockup-window border bg-base-300">
            <div className="flex justify-center px-4 py-10"> <JoditEditor
                ref={editor}
                onChange={(content) => setValue(content)}
            /></div>
        </div>

    );
};

export default RichTextEditor;