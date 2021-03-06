<template>
    <div>
        <h4>{{course.title}}</h4>
        <v-img :src="course.cover_image" ></v-img>
        <div class="text-muted mt-3">
            <v-icon :color="account.theme_color">date_range</v-icon> {{course.start_date}} - {{course.end_date}}
            <v-icon :color="account.theme_color">info</v-icon> {{course.course_type}}
        </div>
        <v-divider></v-divider>
        <div class="d-flex">
            <div>
                <h1>{{ course.price | money }}</h1>
            </div>
            <div class="ml-auto" >
                <v-btn @click="enroll" dark large :color="account.theme_color" :disabled="isOnMyAccount(course)">
                    Enroll Now <v-icon>arrow_forward</v-icon>
                </v-btn>

                <v-menu v-if="isOnMyAccount(course)" origin="center center"  transition="scale-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>

                        <v-list-item @click="$inertia.visit(route('account.course.edit', {account: account.username, course: course.slug}))">
                            <v-list-item-icon>
                            <v-icon>edit</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>Edit course</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item @click="$inertia.visit(route('account.course.student.list', {account: account.username, course: course.slug}))">
                            <v-list-item-icon>
                            <v-icon>people</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>View students</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item @click="deleteCourse(course)">
                              <v-list-item-icon>
                              <v-icon>delete</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                              <v-list-item-title>Delete</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>

                    </v-list>
                </v-menu>
                <course-delete :account="account" ref="courseDelete" />
            </div>
        </div>
        <v-divider></v-divider>
        <div>
            {{course.description}}
        </div>
        <slot />
        <v-btn fixed dark fab bottom right large :color="account.theme_color" :title="`Enroll for ${course.title}`" @click="enroll">
            <v-icon>arrow_forward</v-icon>
        </v-btn>
    </div>
    
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountLayout from '@/Domain/Account/Layout';
    import CourseDelete from './../Components/CourseDelete';

    export default {
        name: "CourseShow",
        layout: (h, page) => h(AccountLayout, [page]),
         metaInfo()
         {
             return{
                title: `${this.course.title} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        components: {
            CourseDelete
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
            account(){
                return this.$page.account;
            },
            course(){
                return this.$page.course;
            }
        },

        methods: {
            enroll(){
                this.$inertia.visit(this.route('account.course.enroll', { account: this.account.username, course: this.course.slug }));
            },

            deleteCourse(course){
                this.$refs.courseDelete.show(course);
            }

        }

    }
</script>