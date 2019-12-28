<template>
    <wrapper title="Course">
        <div class="row">
            <div class="col m6" style="margin-top:20px;">
                <span class="title">Add new</span>
                <i class="material-icons plus_logo">add</i>
            </div>
            <div class="col m6" style="padding-right:100px;margin-top:20px;text-align:right;">
                <button class="btn">Subject</button>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <search-box></search-box>
                </div>
                <div class="card-content">
                    <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Subjects</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style="">
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        <data-row></data-row>
                        
                    
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
       
    </wrapper>
</template>
<script>
import DataRow from '@/components/Course/DataRow.vue';
import SearchBox from '@/components/Course/SearchBox.vue';
export default {
        components: 
        {
            "data-row":DataRow,
            "search-box":SearchBox,
        }
}
</script>
<style lang="scss">
       @import "@/style/components.scss";
        .title 
        {
            @extend %header-shared;
        }

        .btn 
        {
             @extend %primary-button;
        }

        .plus_logo 
        {
           @extend %add_icon-button;
            margin-left:50px;
        }

        .delete_logo 
        {
             @extend %icon-button;
             background:red !important;
        }

        .edit_logo 
        {
             @extend %icon-button;
             background:blue !important;
        }

        table tbody {
            display:block;
            height:350px;
            overflow:auto;
        }
        thead, tbody tr {
            display:table;
            width:100%;
            table-layout:fixed;/* even columns width , fix width of table too*/
        }
        thead {
            width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */
        }

</style>