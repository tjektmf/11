import Profile from "./Profile";

const profiles = [
    {
        name: '김멍멍',
        age: 18,
        gender: '남',
        comment: '멍',
    },
    {
        name: '갈멍멍',
        age: 16,
        gender: '여',
        comment: '뭉',
    },
    {
        name: '초록',
        age: 2,
        gender: '남',
        comment: '짹',
    },
    {
        name: '연두',
        age: 2,
        gender: '여',
        comment: '짹',
    }
];

// 받아온 데이터를 활용해 반복문을 통해 컴포넌트 구성
function ProfileList(props) {
    return (
        <div>
            {profiles.map((profile) => {

                return (
                    <Profile
                        name={profile.name}
                        age={profile.age}
                        gender={profile.gender}
                        comment={profile.comment}
                    >
                    </Profile>
                )
            })}
        </div>
    )
}

export default ProfileList;