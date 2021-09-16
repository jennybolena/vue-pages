<template>
    <div class="education">
        <section class="my-education" id="aueb-uni">
            <h2>Athens University of Economics and Business</h2>
            <h3>Department of Informatics</h3>
            <section class="education-info">
                <section class="text-info">
                    <p >In the year 2017 I got accepted in the Department of Informatics at AUEB to start my Bachelor's Degree. Through my studies I managed to
                        obtain new knowledge, explore new fields in the world of Informatics and develop myself as a whole. Through this journey
                        I came across Web Development which ended up being the area I focused on. </p>
                    <p class="courses-include">Some of the main fields through my studies include:</p>
                    <ul class="main-courses">
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>Data Bases</li>
                        <li>Distributed Systems</li>
                        <li>Web Development</li>
                    </ul>
                </section>
                <section class="uni-logo">
                    <a href="https://aueb.gr/" target="_blank">
                        <img src="../assets/aueb-logo.jpeg">
                    </a>
                </section>
            </section>
        </section>
        <section class="my-education" id="stock-uni">
            <h2>Stockholm University</h2>
            <h3>Department of Computer and System Sciences</h3>
            <section class="education-info">
                <section class="text-info">
                    <p>During the fourth year the decision to do a semester abroad was the best I could have taken. The <b>
                        Erasmus+</b> exchange studies in the year 2020 gave me the chance to learn in a new educational environment and
                        experience a new culture. Despite being on my Bachelor Degree I followed some Master's courses which was a nice and
                        intriguing challenge.
                    </p>
                    <p class="courses-include">Courses taken:</p>
                    <ul class="main-courses">
                        <li>Human cognition in Human-Computer Interaction</li>
                        <li>Data Mining(<i>master's program</i>)</li>
                        <li>Introduction to Information Security(<i>master's program</i>)</li>
                        <li>Entrepreneurship in the Digital Society(<i>master's program</i>)</li>
                    </ul>
                </section>
                <section class="uni-logo">
                    <a href="https://www.su.se/cmlink/stockholm-university" target="_blank">
                        <img src="../assets/stockholm-logo.jpg">
                    </a>
                </section>

            </section>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Education",
        metaInfo: {
            title: 'Education'
        }
    }
</script>

<style scoped>
    .education{
        background-color: #0f0f0f;
        padding: 20px;
    }
    .my-education{
        margin: 20px 0;
        padding: 10px;
        border: 2px solid #42b983;
        border-radius: 10px;
    }

    .my-education h2{
        color: #42b983;
    }

    .my-education h3{
        padding-left: 5px;
    }

    @media screen and (max-width: 600px) {
        .my-education h2{
            font-size: 22px;
        }

        .my-education h3{
            font-size: 17px;
        }

        .my-education{
            margin: 10px 0;
        }
    }


    .education-info{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .education-info .uni-logo{
        width: 20%;
        padding: 20px;
        text-align: center;
    }

    .education-info .text-info{
        width: 80%;
        padding: 50px;
    }

    .courses-include{
        padding-top: 5px;
    }

    .main-courses{
        padding-top: 5px;
        padding-left: 20px;
        color: #42b983;
    }

    .uni-logo img{
        width: 90%;
        border-radius: 30px;
        box-shadow: 1px 1px 3px #42b983;
    }

    .uni-logo img:hover{
        ms-transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        transform: scale(1.02);
    }

    @media screen and (max-width: 600px) {
        .education-info .uni-logo{
            width: 100%;
            padding: 20px 40px;
        }

        .education-info .text-info{
            width: 100%;
            padding: 20px;
        }

        .education{
            padding: 5px;
        }

        .uni-logo img{
            width: 80%;
            border-radius: 20px;
        }
    }
</style>
