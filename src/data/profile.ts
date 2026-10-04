// 보여 주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type LinkItem = {
  id: string; // 클릭 수를 저장할 때 쓰는 고유 키 (바꾸면 기존 클릭 수와 연결이 끊깁니다)
  title: string;
  url: string;
};

export const profile = {
  name: "정광운",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
