import React from 'react';

const Question = () => {
  return (
    <div className='mt-5'>
      <h5>Question of Answer</h5>
    <div class="row row-cols-1 row-cols-md-2 g-4">
       <div class="col">
       <div class="card">
            
         <div class="card-body">
        <h5 class="card-title">How Does React Work ?</h5>
            <p class="card-text">It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. </p>
         </div>
       </div>
         </div>
      <div class="col">
      <div class="card">
     
        <div class="card-body">
        <h5 class="card-title">What are the differences between props and state ?</h5>
        <p class="card-text">Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.Have you ever wondered how can we pass the data between the components</p>
      </div>
      </div>
     </div>
       <div class="col">
       <div class="card">
     
          <div class="card-body">
            <h5 class="card-title">useeffect works without data loaded</h5>
          <p class="card-text">So I useEffect with an empty [] array trailing it so it will only run on the initial load.. and I have it call refreshHandler(); THIS ALSO WORKS! I can see it in the console the numbers, the datas, they are here!!!! But.... the page.... does not render the new data...... and now I'm past being mad, sad, rage,</p>
        </div>
       </div>
      </div>
     
   </div>
   </div>
  );
};

export default Question;