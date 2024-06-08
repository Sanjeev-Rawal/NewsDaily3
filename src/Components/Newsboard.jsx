import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

function Newsboard(){
const [articles, setArticles] = useState([])

useEffect(()=>{

let newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=780faf51806544dab7017ca48dfd9024'
fetch(newsUrl).then((response)=>response.json()).then((data)=>setArticles(data.articles))


},[])



return(
  <div>
<h2 className = "text-centre">Latest <span className = "badge text-bg-info">News</span > </h2>
{articles.map((news,index)=>{
  if(news.title && news.description && news.urlToImage && news.url){
return <Newsitem key={index} title={news.title.slice(0,70)} description={news.description.slice(0,90)} src={news.urlToImage} url={news.url}  />
  }
})}

  </div>
)

};

export default Newsboard;