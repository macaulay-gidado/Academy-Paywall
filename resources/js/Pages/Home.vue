<template>
    <div>
        <courses-widget />
    </div>
</template>

<script>
    import App from '@/layouts/App'
    import CoursesWidget from '@/Domain/Course/Components/CoursesWidget'

    export default {
        name: "HomePage",
        layout: (h, page) => h(App, [page]),
        metaInfo()
         {
             return{
                title: `Home`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        components: {
            CoursesWidget
        }
    }
</script>
