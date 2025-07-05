// // src/app/page.tsx
// export default function Home() {
//   return (
//     <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Ati castigat PULA!</h1>
//     </main>
//   );
// }


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-300 p-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 w-full max-w-md p-6 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply opacity-50"></div>
        
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-extrabold text-gray-800">🎟️ Beach, Please! 2025</h1>
          <p className="text-lg text-gray-600">Acces General</p>
          <p className="text-sm text-gray-500">Valabil pentru o singură intrare</p>
          <hr className="my-4 border-dashed border-t-2 border-gray-300" />
          <div className="text-left text-sm text-gray-700 space-y-1">
            <p><strong>Nume:</strong> Invitatie</p>
            <p><strong>Data:</strong> 9 Iulie 2025</p>
            <p><strong>Locație:</strong> Plaja Costinești</p>
            <p><strong>Ora:</strong> 18:00</p>
          </div>
          <div className="mt-6 text-center">
            <button className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition">
              Prezintă biletul
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";

// export default function Index() {
//   const allPosts = getAllPosts();

//   const heroPost = allPosts[0];

//   const morePosts = allPosts.slice(1);

//   return (
//     <main>
//       <Container>
//         <Intro />
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           excerpt={heroPost.excerpt}
//         />
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//       </Container>
//     </main>
//   );
// }
