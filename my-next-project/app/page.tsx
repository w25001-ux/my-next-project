import styles from "./page.module.css"
import Image  from "next/image";

import { getNewsList } from "@/app/_libs/microcms";
import { Top_NEWS_LIMIT } from "@/app/_constants";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "./_components/BottonLink";
// import { News } from "@/app/_libs/microcms";
// type News = {
//   id: string;
//   title : string;
//   category : {
//     name : string;
//   };
//   publishedAt : string;
//   createdAt : string;
// };

// const data : {
//   contents : News[] } = {
//     contents : [
//       {
//         id : "1",
//         title : "渋谷にオフィスを移転しました",
//         category : {
//           name : "更新情報",
//         },
//         publishedAt : "2023/05/19",
//         createdAt : "2023/05/19",
//       },
//       {
//         id : "2",
//         title : "当社 CEO が業界　リーダーTOP30に選出されました",
//         category : {
//           name : "更新情報",
//         },
//         publishedAt : "2023/05/13",
//         createdAt : "2023/05/19",
//       },
//       {
//         id : "3",
//         title : "テストの記事です",
//         category : {
//           name : "更新情報",
//       },
//       publishedAt : "2023/04/19",
//       createdAt : "2023/04/19",
//       },
//     ],
//   };

// type Event = {
//   date : string;
//   name : string; 
// };
// const data2 : {
//   contents : Event[] } = {
//     contents : [
//       {
//         date : "04/15",
//         name : "花見",
//       },
//       {
//         date : "05/05",
//         name : "ゴールデンウイークピクニック",
//       },
//       {
//         date : "08/20",
//         name : "バーベキュー",
//       },
//       {
//         date : "10/31",
//         name : "ハロウィン",
//       }
//     ],
//         };
export default async function Home(){
  // const sliceData = data.contents.slice(0,2);

  const data = await getNewsList({ limit: Top_NEWS_LIMIT });
  const name = '世界';
  // const sliceData: News[] = [];
  return (
    <>
    <section className={styles.top}>
  <div>
    <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
    <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。
    </p>
  </div>
  <Image className={styles.bgimg} 
  src="/img-mv.jpg" 
  alt="" 
  width={4000} 
  height={1200}
  />
  </section>
    <section className = {styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={data.contents}/>
        {/* <ul>
            {sliceData.map((article) => (
              <li key = {article.id} className = {styles.list}>
                <div className = {styles.link}>
                  <Image className = {styles.image}
                  src = "/no-image.png"
                  alt = "No Image"
                  width = {12000}
                  height = {630}
                  />
                  <dl className = {styles.content}>
                    <dt className = {styles.newsItemTitle}>
                      {article.title}
                    </dt>
                    <dd className = {styles.meta}>
                      <span className = {styles.tag}>
                        {article.category.name}
                      </span>
                      <span className = {styles.date}>
                        <Image 
                        src = "/clock.svg"
                        alt = ""
                        width = {16}
                        height = {16}
                        priority
                        />
                        {article.publishedAt}
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
        </ul> */}
        {/* <div>
          <h1>イベントスケジュール</h1>
          <ul>
            {data2.contents.map((event,index) => (
              <li key={index}>
                {event.date} : {event.name}
              </li>
            ))}
          </ul>
        </div> */}
        <div className= {styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}