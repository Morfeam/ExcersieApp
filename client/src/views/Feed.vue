<template>
<div id="grad1">
    <br>
    <div class="container  has-background-light">
         <div class="columns">
        <div class="column">
    <div class="notification is-primary">
      <h2 class="title is-4">Feed Page</h2>
      </div>
        </div>
        </div>

    <br>
        <div class="columns">
            <div class="column is-one-quarter" >
            <div class="card" >
               
                    <p class ="panel-heading"><center>User Directory</center></p>
                
            <div class="card-content">
            <div class="content">
            <p> <b>Id Number</b> | Name | Email</p>
            </div>
            </div>
            </div>

            <div class="card" v-for=" (x, i) in userList" 
                      :key="i"
                      :i="i"
                      :post="x">
            <div class="card-content">
            <div class="content">
                 <p> <b>{{x.id}}</b> | {{x.FirstName}} {{x.LastName}} | {{x.Email}} <br> <a href="#" class="card-footer-item">Follow</a></p>
              </div>
             </div>
            </div>

            </div>
            <div class="column is-one-half">

                <div v-for=" (x, i) in pubWorkouts.reverse() " 
                      :key="i"
                      :i="i"
                      :post="x">

                     <div class="card">
                    <header class="card-header">
                        <div class="card-header-title">
                            <div class = "columns">
                            <div class=" column ">{{x.Exercise_Type}} 
                            </div>
                            <div class=" column is-half">Post ID: {{x.id}} 
                            </div>
                            </div>
                        </div>
                        
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p class="title is-4">{{x.Owner_id}} {{x.Owner_id}}</p>
                            <p class="subtitle is-6">{{x.Owner_id}}</p>
                            
                            <p>{{x.Note}}</p>
                            <p>{{ x.Other_Info}}</p>
                        <br>
                        <time datetime="YYYY-MM-DD">{{x.created_at}}</time>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Follow</a>
                        <a href="#" class="card-footer-item">Comment</a>
                    </footer>
                    </div>
                </div> 
            
            </div>
            <div class="column is-one-quarter" @mouseenter="error">
                <Sidebar />
            </div>
        </div>
  
    </div>

  <br>
</div>
</template>

<script>
import Sidebar from "@/components/SideBar";
import Post from "@/components/Post";
import { getPublicWorkouts } from "@/models/workouts";
import {  getList, getUserID} from "@/models/users";
import session from "@/models/session";
export default {
    data(){
        return {
            pubWorkouts: [],
            Thename: [],
            userList: [],
            userInfo: [],
        }
    },
    async created(){
        this.pubWorkouts = await getPublicWorkouts(3);
        this.userList = await getList();
    },
    components: {
        Sidebar,Post
    },
    methods: {
        error(){
            //session.addNotification('Something went wrong.', 'danger')
        },
        add(p){
            this.posts.push({
                URL: p.images[0].source
            })
        }
    }
}
</script>

<style>
    .card {
        margin-bottom: 30px ;
    }
    #grad1{
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(189,189,189);
   background: linear-gradient(180deg, rgba(189,189,189,1) 0%, rgba(168,126,193,1) 100%);
    }
</style>