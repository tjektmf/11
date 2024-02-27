function MyList(props) {

    return React.createElement(

        'ul',
        {
            style: { 
                border: 'solid 1px red', 
                textDecorationColor: 'blue'
            }
        },
        [
            React.createElement(
                'li',
                null,
                '리스트 속의 리스트1'
            ),
            React.createElement(
                'li',
                null,
                '리스트 속의 리스트2'
            ),
            React.createElement(
                'li',
                null,
                '리스트 속의 리스트3'
            ),
            React.createElement(
                'li',
                null,
                '리스트 속의 리스트4'
            )
        ]
    )
}
console.log('dd2');