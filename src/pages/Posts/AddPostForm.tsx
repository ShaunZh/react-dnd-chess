/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-09-07 19:30:23
 * @LastEditors: Hexon
 * @LastEditTime: 2021-09-07 21:18:48
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postSlice';

export default function AddPostForm(): React.ReactElement {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = e => setTitle(e.target.value);

  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = e => setContent(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && content) {
      dispatch(addPost(title, content));
      setTitle('');
      setContent('');
    }
  };

  return (
    <form action="javascript:void">
      <label htmlFor="title">
        <input type="text" id="title" value={title} onChange={handleTitle} />
      </label>
      <label htmlFor="content">
        <textarea name="content" id="content" cols={30} rows={10} value={content} onChange={handleContent}></textarea>
      </label>
      <button onClick={handleSubmit}>提交</button>
    </form>
  );
}