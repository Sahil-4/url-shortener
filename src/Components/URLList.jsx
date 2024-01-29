import URLBox from "./URLBox";

function URLList() {
  const urls = [
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
    "http://short-url.com/redirect/to/mypage", "http://short-url.com/redirect/to/mypage",
  ];

  return (
    <div className="container list">
      {urls.map((url) => (
        <URLBox key={url} url={url} />
      ))}
    </div>
  );
}

export default URLList;
