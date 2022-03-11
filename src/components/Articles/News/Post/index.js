import React, {Component} from "react";
// import axios from "axios";
// import { URL } from "../../../../config";
import '../../articles.css';
import Header from "./header";
import { firebase, firebaseDB, firebaseLooper, firebaseTeams } from "../../../../firebase";

class NewsArticles extends Component {

    state = {
        article: [],
        team: [],
    }

    componentWillMount(){
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then((snapshot) => {
            let article = snapshot.val();
            firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
            .then((snapshot) => {
                const team = firebaseLooper(snapshot)
                this.setState({
                    article,
                    team
                })
                // this.getImageURL(article.image)
            })
        })

        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then(response => {
        //     // console.log(response.data)
        //     let article = response.data[0]
        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then(response => {
        //         this.setState({
        //             article,
        //             team:response.data
        //         })
        //     })
        // })
    }

    render(){
        const article = this.state.article
        const team = this.state.team
        return (
            <div className="articleWrapper">
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className="articleBody">
                    <h1>{article.title}</h1>
                    <div className="articleImage"
                        style={{
                            background: `url('/images/articles/${article.image}')`
                        }}
                    ></div>
                    <div className="articleText"
                        // dangerouslySetInnerHTML={{
                        //     __html: article.body
                        // }}
                        
                    >
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticles;