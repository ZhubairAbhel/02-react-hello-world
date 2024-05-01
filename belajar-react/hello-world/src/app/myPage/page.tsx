// export default function Home() {
//     return(
//         <>
//             <MyPage/>
//         </>
//     );
// }

// function MyPage(){
//     return(
//         <>
//             <h1>welcome</h1>
//             <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error excepturi veritatis sed quaerat aliquam! Tempora sint repudiandae quis recusandae deleniti, exercitationem quam, corporis neque dolorum modi ea voluptate non ex!</h2>
//         </>
//     );
// }

const user = {
    name: '2141720248 - Zhubair Abhel',
    imageUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKyaU_t66LMd1dZyRtPNedZNOwKe_D4EwhGJgjJp2NoTw=s360-c-no',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Foto ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }