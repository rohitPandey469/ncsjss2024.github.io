import React from "react";
import LatestPost from "./LatestPost";
import { useState, useEffect } from "react";
import styles from "./LatestPost.module.css"

const Post = () => {
  const [latestPost, setLatestPost] = useState(null);

  /////////////////////Development code//////////////////////////
  // const BACKEND_URL="http://localhost:3000"
  // useEffect(() => {
  //   const fetchLatestPost = async () => {
  //     try {
  //       // Replace with actual logic to fetch Instagram data
  //       let response = await fetch(
  //         "https://graph.instagram.com/24319917154318964/media?access_token=IGQWRPM3VvMHE3ekliV1VtbGtDVmE4Tnp1TE1FMC0zWXFZAVFF6V3B2SmRTTW9xeVdnMWNmNXNQN3ZAiaTc5RWREUEVzQTlYbE5FM3c3WFFkTHR3NnJUOVRVQlJCaVhFb1JWY1NrQTFvYXFpbHVSZAFhjeXFrcTRhb1EZD"
  //       );
  //       const data = await response.json();
  //       const firstPostId = data.data[0]?.id || null;
  //       response = await fetch(
  //         `https://graph.instagram.com/${firstPostId}?fields=media_type,media_url,thumbnail_url,permalink,caption&access_token=IGQWRPM3VvMHE3ekliV1VtbGtDVmE4Tnp1TE1FMC0zWXFZAVFF6V3B2SmRTTW9xeVdnMWNmNXNQN3ZAiaTc5RWREUEVzQTlYbE5FM3c3WFFkTHR3NnJUOVRVQlJCaVhFb1JWY1NrQTFvYXFpbHVSZAFhjeXFrcTRhb1EZD`
  //       );
  //       const firstPostData = await response.json();
  //       setLatestPost(firstPostData);
  //     } catch (error) {
  //       console.error("Error fetching latest post data:", error);
  //     }
  //   };

  //   fetchLatestPost();
  // }, []);
  //////////////////////////////////////////////////////////

  //////////////////////////Production Code////////////////////
  const BACKEND_URL="https://ncs-server.onrender.com"
  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/instagram/posts`);
        const data = await response.json();
        setLatestPost(data);
      } catch (error) {
        console.error("Error fetching latest post data:", error);
      }
    };

    fetchLatestPost();
  }, []);
  //////////////////////////////////////////////////////////////

  return (
    <section id="latest_post" className={styles.post}>
      <h1 className={styles.heading}>Stay in the Now!</h1>
      {latestPost && <LatestPost post={latestPost} />}
    </section>
  );
};

export default Post;
