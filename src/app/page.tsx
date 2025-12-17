import React from 'react'

const page = () => {
  return (
    <div>


      <figure className="md:flex bg-red-200 rounded-non p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-auto rounded-full ml-auto" src="/pic.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    
    
    <blockquote>
      <p className="text-lg font-medium text-white-500 dark:text-sky-600 text-sm font-bold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams.        It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-large">
      <div className="text-red-500 dark:text-sky-600 text-2xl font-bold">
        Ghulam abbas Bhatti
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Member (PAIB)
      </div>
    </figcaption>
  </div>
</figure>







<figure className="flex flex-col items-center bg-red-200 rounded-xl p-6 dark:bg-slate-800">
  
  <img
    className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-4"
    src="/pic.jpg"
    alt="Profile"
  />

  <figcaption className="text-center">
    <div className="text-2xl font-bold text-red-600 dark:text-sky-400">
      Ghulam Abbas
    </div>
    <div className="text-slate-700 dark:text-slate-400">
      Staff Member, PAIB
    </div>
  </figcaption>

</figure>









<figure className="flex bg-red-200 rounded-xl p-6 dark:bg-slate-800">

 
  <div></div>

  
  <div className="ml-auto flex flex-col items-center text-center">

    <img
      className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-3"
      src="/pic.jpg"
      alt="Profile"
    />

    <div className="text-2xl font-bold text-red-600 dark:text-sky-400">
      Ghulam Abbas
    </div>

    <div className="text-slate-700 dark:text-slate-400">
      Staff Member, PAIB
    </div>

  </div>

</figure>



    </div>
  )
}

export default page