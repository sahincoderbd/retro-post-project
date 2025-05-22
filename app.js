console.log('JS file loading');

const loadPostData=async()=>{
const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
const data=await res.json();
console.log(data.message);
displayPosts(data);

}

const displayPosts=(data)=>{
    const posts=data.posts;
    // console.log(posts);

    // getting the posts container that including all posts

    const postsParentContainer=document.getElementById('postsContainer');
    // console.log(typeof(posts));
  posts.forEach(post => {
    
   console.log(post);

      // create post container

      const postContainer= document.createElement('div');

      postContainer.innerHTML=`
      <!-- post -->
      <div class="post-single hidden flex flex-col lg:flex-row gap-5">
        <!-- profile image -->
        <div class="indicator">
          <span class="indicator-item status status-success"></span>
          <div class="bg-white grid place-items-center rounded-xl shadow-sm h-15 w-15">
            <img class="rounded-xl" src="${post.image}" alt="profile">
          </div>
        </div>
        <!-- post content -->
         <div class="flex flex-col gap-2 text-left flex-1">
        
          <div class="flex gap-4 text-gray-600">
          <p># <span>${post.category}</span> </p>
          <p>Author: <span>${post.author.name}</span> </p>
          </div>
         <h3 class="text-xl lg:text-2xl text-black font-semibold " id="post-title-${post.id}">${post.title}</h3>
        <p class="text-lg text-gray-600 border-b-[#12132D40] pb-5 border-b border-dashed">${post.description}</p>
         

        <!-- post info -->
        <div class="flex justify-between mt-3 gap-3">
          <div class="flex justify-between lg:justify-start gap-3">
            <!-- comment -->
            <div class="flex gap-2 items-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-gray-700 text-lg">${post.comment_count}</span>
            </div>
            <!-- views count -->
            <div class="flex gap-2 items-center">
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66667 8C9.66667 8.61884 9.9125 9.21233 10.3501 9.64992C10.7877 10.0875 11.3812 10.3333 12 10.3333C12.6188 10.3333 13.2123 10.0875 13.6499 9.64992C14.0875 9.21233 14.3333 8.61884 14.3333 8C14.3333 7.38116 14.0875 6.78767 13.6499 6.35008C13.2123 5.9125 12.6188 5.66667 12 5.66667C11.3812 5.66667 10.7877 5.9125 10.3501 6.35008C9.9125 6.78767 9.66667 7.38116 9.66667 8Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 8C19.7 12.6667 16.2 15 12 15C7.8 15 4.3 12.6667 1.5 8C4.3 3.33333 7.8 1 12 1C16.2 1 19.7 3.33333 22.5 8Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <span class="text-gray-700 text-lg " id="post-views-count-id-${post.id}">${post.view_count}</span>
            </div>
            <!-- published time -->
            <div class="flex gap-2 items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <span class="text-gray-700 text-lg">${post.posted_time} min</span>
            </div>
          </div>
       

          <!-- mark as read -->
          <div class="flex gap-2 items-center self-end cursor-pointer">
            <button onClick = "sideBarPostHandler(${post.id})" class="flex gap-2 items-center cursor-pointer">
            <img src="images/email.png">
            </button>
          </div>
         

        </div>
        </div>
        
         
      </div>
      <!-- place holder skeleton -->
      
      <div class="post-skeleton flex flex-col lg:flex-row gap-5">
        <div class="skeleton bg-[#797DFC40] h-15 w-15"></div>

        <div class="flex flex-col gap-4 flex-1">        
          <div class="skeleton bg-[#797DFC40] h-4 w-48"></div>
          <div class="skeleton bg-[#797DFC40] h-4 w-3/4"></div>
          <div class="skeleton bg-[#797DFC40] h-4 w-full"></div>
          <div class="skeleton bg-[#797DFC40] h-4 w-full"></div>
           <div class="flex gap-4 flex-1">  
            <div class="skeleton bg-[#797DFC40] h-4 w-16"></div>
            <div class="skeleton bg-[#797DFC40] h-4 w-16"></div>
            <div class="skeleton bg-[#797DFC40] h-4 w-16"></div>

           </div>
        </div>
      </div>

       
      `;

      postContainer.setAttribute('class','post-container flex flex-col gap-5 hover:bg-[#797DFC1A] rounded-2xl border-2 border-[#797DFC] p-4');
      postContainer.setAttribute('id',`${post.id}`);
      postContainer.setAttribute('isactive',`${post.isActive}`);
      postsParentContainer.appendChild(postContainer);
   
  // Apply the function for each element
  const postContents=document.querySelectorAll('.post-container');
  postContents.forEach((post)=>{
    //  Hide the skeleton place holder
    setTimeout(()=>{
          const postSkeletons=post.querySelectorAll('.post-skeleton');
          const postSingles=post.querySelectorAll('.post-single');
         
          postSkeletons.forEach((skeleton)=>skeleton.classList.add('hidden'));
          postSingles.forEach((postSingle)=>postSingle.classList.remove('hidden'));

          },2000);

          
   });
  
   
  });

  userActiveStatusUpdate();

}

loadPostData();

//  user active status update
const userActiveStatusUpdate=()=>{

const postContents=document.querySelectorAll('.post-container');
console.log(postContents.length);
postContents.forEach((element)=>{
  
  const isActive=element.getAttribute('isactive')==='true';

     if(isActive===false){
      const indicators=element.querySelectorAll('.indicator-item');
      indicators.forEach((indicator)=>{ 
        indicator.classList.add('status-error');
        indicator.classList.remove('status-success');

      });
      }
});

}

// mark as read function 
// collect the array of clicked mark as read button
const markeAsReadPostsArrayPostId = [];
const sideBarPostHandler=(postId)=>{
   
// console.log('user clicked',postId);

// get the post that clicked mar as read
const postMarkAsRead=document.getElementById(postId);
console.log('user clicked ' ,postMarkAsRead);

// when user click the envelope icon 
const markAsReadCount=document.getElementById('markAsReadCount');

// the main container
const rightSideBar=document.getElementById('rightSideBar');

if(!markeAsReadPostsArrayPostId.includes(postId)){

 markeAsReadPostsArrayPostId.push(postId);
//  update the mark as read counter
 markAsReadCount.innerText=markeAsReadPostsArrayPostId.length;

// clear the side bar
const emptyMarkAsReadMessage=document.getElementById('emptyMarkAsReadMessage');
emptyMarkAsReadMessage.classList.add('hidden');

//  create the post that marked as readed
 const markAsReadedPost=document.createElement('div');
//  appended
 rightSideBar.appendChild(markAsReadedPost);
markAsReadedPost.setAttribute('class','animate-fade-in-up bg-white text-left rounded-xl flex justify-between items-center px-4 py-3 shadow flex-nowrap ');

// getting the data of post that marked;
const postTitle=postMarkAsRead.querySelector(`#post-title-${postId}`);
const postTitleText=postTitle.innerText;

const postViews=postMarkAsRead.querySelector(`#post-views-count-id-${postId}`);
const postViewsCount=postViews.innerText;

 markAsReadedPost.innerHTML=`
 <h3 class="text-xl basis-[70%]">${postTitleText}</h3> 
        <div class="flex justify-end items-center gap-1 flex-nowrap"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        <p class="text-lg text-gray-600 basis-[30%]">${postViewsCount}</p>
        </div>
 `;
}
else{
  console.log(postMarkAsRead,'already ,marked as readed');
} 
 
}



