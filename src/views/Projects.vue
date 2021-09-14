<template>
    <div id="projects">
        <article class="project">
            <h2>Book Search</h2>
            <p>This is a platform for searching a wide variety of books. Actions such as <i>save</i>,
                <i>update</i> and <i>delete</i> can be performed on the books.</p>
             <section class="see-more">
                 <i>See more: </i> <a href="https://github.com/jennybolena/Book-Search" target="_blank"><i class="fab fa-github"></i></a>
             </section>
        </article>
        <article class="project">
            <h2>Microsoft SQL Server Tutorial</h2>
            <p>This is a website with a beginner's guide to Microsoft SQL Server and SQL. The tutorial videos are made by me.</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://jennybolena.github.io/SQLServerTutorial/index.html" target="_blank">
                <i class="fas fa-database"></i></a>
            </section>
        </article>
        <article class="project">
            <h2>UniPoll</h2>
            <p>UniPoll is an application that allows teachers of Athens University of Economics and Business to create polls.
                The polls are shared with the students. The polls vary from course content related to decision
                making of serious matters.</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://github.com/jennybolena/UniPoll" target="_blank"><i class="fab fa-github"></i></a>
            </section>
        </article>
        <article class="project">
            <h2>Image Filter</h2>
            <p>Image Filter is a program created with C++. Given an image as an input, it applies a variety of filters chosen by the user.
                The accepted image format is ".ppm".</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://github.com/jennybolena/Cpp_Image_filter" target="_blank"><i class="fab fa-github"></i></a>
            </section>
        </article>
        <article class="project">
            <h2>Discover Green Athens</h2>
            <p>This is a web-page created with the purpose of displaying some of the most beautiful places of Athens.
                It includes places for having a picnic, going on a hike and many more. It was created using Weebly CMS
                with the collaboration of 4 fellow students.</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://discovergreenathens.weebly.com/" target="_blank"><i class="fab fa-weebly"></i></a>
            </section>
        </article>
        <article class="project">
            <h2>Gymnos</h2>
            <p>Gymnos is an upcoming online marketplace where any trainer can offer
                a variety of workout plans that trainees can use to meet their fitness needs and goals.
                Firebase was used for hosting.</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://gymnos-624e3.web.app/" target="_blank">
                <i class="fas fa-dumbbell"></i></a>
            </section>
        </article>
        <article class="project">
            <h2>University</h2>
            <p>Through out the course of studies I've collaborated with fellow students and contributed to team projects.
                Some of those contributions can be seen on GitHub at a repository created by one of my co-partners.
                The repository contains projects from a few students and involves most courses available at AUEB.</p>
            <section class="see-more">
                <i>See more: </i> <a href="https://github.com/Nikoloutsos/Aueb-projects" target="_blank"><i class="fab fa-github"></i></a>
            </section>
        </article>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        metaInfo: {
            title: 'Projects'
        }
    }
</script>

<style scoped>
    #projects{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
        background-color: #0f0f0f;
    }

    .project{
        width: 40%;
        padding: 20px;
        border: 1px solid #42b983;
        margin: 10px 5px;
        border-radius: 10px;
    }

    .project:hover{
        box-shadow: 2px 2px 5px #42b983;
    }

    .project h2{
        text-align: center;
        color: #42b983;
        padding: 5px;
    }

    .see-more{
        padding-top: 15px;
        text-align: center;
    }
    .fa-github, .fa-weebly, .fa-database, .fa-dumbbell{
        color: #42b983;
        background-color: #0f0f0f;
        font-size: 30px;
    }
    .fa-github:hover, .fa-weebly:hover, .fa-database:hover, .fa-dumbbell:hover{

        color: aquamarine;
    }


    @media screen and (max-width: 850px){
        .project{
            width: 100%;
        }
    }
</style>
