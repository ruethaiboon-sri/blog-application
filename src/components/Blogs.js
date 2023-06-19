import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

export default function Blogs() {
  const [search,setSearch] = useState("")
  const [filteredBlog,setFilterBlog] = useState([])
  useEffect(()=>{
    const result = blogs.filter((blog)=>blog.title.toLowerCase().includes(search.toLowerCase()) )
    setFilterBlog(result)
  },[search])

  return (
    <div className="blogs-container">
      <div className="search-container">
      <input type="text" className="search-input" placeholder="search ..." value={search} onChange={((e)=>setSearch(e.target.value))}/>
        <article>
          {filteredBlog.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="card">
                <h2>{blog.title}</h2>
                <p>{blog.content.substring(0, 300)}</p>
                <hr />
              </div>
            </Link>
          ))}
        </article>
      </div>
    </div>
  );
}
