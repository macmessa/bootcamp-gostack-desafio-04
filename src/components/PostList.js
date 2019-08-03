import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Tyler Hoffman",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Alexander Jenkins",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            date: "05 Jun 2019",
            content:
              "Houve processo seletivo recentemente, mas acho que a vaga já foi preenchida"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            date: "05 Jun 2019",
            content:
              "No momento não temos mais vagas em aberto, mas fique atento as novidades no nosso blog:\nhttps://blog.rocketseat.com.br/"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Tammy Roberts",
          avatar: "https://randomuser.me/api/portraits/women/40.jpg"
        },
        date: "02 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 5,
            author: {
              name: "Emma Mckinney",
              avatar: "https://randomuser.me/api/portraits/women/50.jpg"
            },
            date: "02 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 6,
            author: {
              name: "Eli Carr",
              avatar: "https://randomuser.me/api/portraits/men/34.jpg"
            },
            date: "03 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
