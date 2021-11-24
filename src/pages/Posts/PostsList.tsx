/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-09-07 19:30:07
 * @LastEditors: Hexon
 * @LastEditTime: 2021-09-07 20:41:19
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Post, selectPost } from './postSlice';

export default function PostsList(): React.ReactElement {
  const posts = useSelector(selectPost);

  const PostsList = posts.map((post: Post, index: number) => (
    <article key={post.id}>
      <h3>No.{index + 1} - {post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="post-list">
      {PostsList}
    </section>
  );
}

