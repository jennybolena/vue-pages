<template>
    <div id="home">
        <h2 id="typeWriter"></h2>
        <section id="prof_img_container">
            <img src="../assets/profile.jpg" alt="profile picture" id="prof_img">
        </section>
        <section class="about-me">
            <h2> A little more about me</h2>
            <p> I am {{age}} years old student from <i>Albania</i> and <i>Greece.</i></p>
            <p>Currently towards the end of my Bachelor's Degree and on a continues journey of learning and developing new skills. </p>
        </section>
    </div>
</template>


<script>
    export default {
        name: "Home",
        metaInfo: {
            title: 'Home',

        },
        data: function () {
            return{
                txt: ["Hi!", "I'm Jenny.","A junior web developer and enthusiast!"],
                age : ''
            }
        },

        methods:{
            calcAge: function(){
                let dob = '19990622';
                let year = Number(dob.substr(0, 4));
                let month = Number(dob.substr(4, 2)) - 1;
                let day = Number(dob.substr(6, 2));
                let today = new Date();
                this.age = today.getFullYear() - year;
                if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
                    this.age--;
                }
            },
            startTypeWriter: function () {
                let typeWriter = document.getElementById('typeWriter');
                let i;
                let j;

                for(i = 0 ; i < this.txt.length; i++){
                    for(j = 0; j < this.txt[i].length; j++){
                        let myChar = this.txt[i].charAt(j);
                        typeWriter.innerHTML += myChar;
                    }
                    typeWriter.innerHTML += "</br>";
                }
            },
        },

        mounted() {
            this.startTypeWriter();
            this.calcAge();
        }

    }
</script>

<style scoped>
    #home{
        background-color: #0f0f0f;
        padding: 50px 0px;
        color: white;
    }

    #home h2{
        text-align: center;
    }

    #prof_img_container{
        text-align: center;
        padding-top: 20px;
    }
    #prof_img{
        width: 30%;
        height: auto;
        border-radius: 50%;

    }

    .about-me{
        padding: 20px 5px 10px;
        text-align: center;
    }

    .about-me h2{
        color: #42b983;
    }

    @media screen and (max-width: 980px){
        #prof_img{
            width: 50%;
        }
    }

    @media screen and (max-width: 600px) {
        #prof_img{
            width: 60%;
        }

    }
</style>
