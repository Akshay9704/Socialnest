const banner = () => {
  return (
    <div>
        <article className="flex flex-col-reverse md:flex-row lg:flex-row justify-center gap-12 mt-36">
            <div className="md:w-96 lg:w-96 w-4/5 flex justify-center m-auto">
                <img src="https://img.freepik.com/free-photo/beautiful-woman-filming-herself-blog_23-2148586381.jpg?w=360&t=st=1687444577~exp=1687445177~hmac=41d0f941dc505e35960423941ee05cbaf1c647b628a0a2a9d4d45b987168e9a5" alt="/"/>
            </div>
            <div className="md:mt-20 lg:mt-20 -mt-10 ml-10 md:ml-0 lg:ml-0 md:mr-12 lg:mr-12">
            <h1 className="text-white font-extrabold md:text-5xl lg:text-5xl text-4xl">Create your portfolio today</h1>
            <h1 className="text-white font-extrabold md:text-5xl lg:text-5xl text-4xl">and start growing</h1>

            {/* SIGNUP CALL-TO ACTION BUTTON */}
            <button className="border rounded-lg px-20 py-5 md:mt-20 lg:mt-20 mt-12 animate-bounce text-white font-bold hover:bg-yellow-500">Create Portfolio ↗</button>
            </div>
        </article>
    </div>
  )
}

export default banner