
// Javascript 영역이기 때문에 font-size가 아닌 fontSize로 사용해야 함
// 뒤에 값 없이 컴마만 있어도 상관없음 미리 써놓으면 나중에 오류 줄이는데 도움이 됨
const styles = {
    profileWrapper: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        border: 'solid 1px red'
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    
    introContainer:{
        display:'flex',
        flexDirection:'column',
    },
    nameText:{
        fontSize:15,
        fontWeight:'bold',
        color:'green',
    },
    genderText:{
        color:'gray',
        fontSize:13,
    },
    commentText:{
        color:'black',
        fontSize:13,

    },

};

function Profile(props) {
    return (
        <div style={styles.profileWrapper}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqgEyn0qvr40s53YMxYpEk6Nzi-UihG8KEQ&usqp=CAU" alt="해달" 
                    style={styles.image}
                    />
            </div>
            <div style={styles.introContainer}>
                <span style={styles.nameText}>{props.name}({props.age})</span>
                <span style={styles.genderText}>{props.gender}</span>
                <span style={styles.commentText}>{props.comment}</span>

            </div>
        </div>
    )
}



export default Profile;
