import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const slug = fileNameToSlug(fileName);
  const filePath = path.join(postDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = { ...data, slug, content };
  return postData;
}

export function getAllPosts() {
  const postFiles = getAllPostPaths();
  const allPosts = postFiles
    .map((file) => getPostData(file))
    .sort((a, b) => (a.data > b.data ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured);
}

export function getEditorPick() {
  return getAllPosts().filter((post) => post.isPicks);
}

export function getFeaturedPost() {
  return getFeaturedPosts()[0];
}

export function getHerodPost() {
  return getAllPosts()[0];
}

export function getAllTags() {
  return [
    ...new Set(getAllPosts().reduce((acc, post) => [...acc, ...post.tags], [])),
  ];
}

export function getAllPostPaths() {
  return fs.readdirSync(postDirectory);
}

export function fileNameToSlug(fileName) {
  return fileName.replace(/\.md$/, "");
}
