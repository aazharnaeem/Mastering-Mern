

const { user, blog } = require('../model');



const addBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, image } = req.body;
        // const {image} = req.files;

        const exUser = await user.doesUserExist(id);
        if (!exUser) {
            return res.status(404).send({
                message: 'User not found',
                sucess: false
            });
        }
        const newBlog = new blog({
            user: id,
            description,
            image: image
        });
        newBlog.save();

        return res.status(200).send({
            message: 'Blog added successfully',
            sucess: true
        });
    }
    catch (err) {
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await blog.find({});
        return res.status(200).send({
            message: 'All blogs',
            sucess: true,
            data: allBlogs
        });
    }
    catch (err) {
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
};

const getUserBlogs = async (req, res) => {
    try {
        const { id } = req.params;
        const exUser = await user.doesUserExist(id);
        if (!exUser) {
            return res.status(404).send({
                message: 'User not found',
                sucess: false
            });
        }
        const userBlogs = await blog.find({ user: id });
        return res.status(200).send({
            message: 'User blogs',
            sucess: true,
            data: userBlogs
        });
    }
    catch (err) {
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
};

const getSingleBlog = async (req, res) => {
    try{
        const { id } = req.params;
        const { blogId } = req.body;
        const exUser = await user.doesUserExist(id);
        if (!exUser) {
            return res.status(404).send({
                message: 'User not found',
                sucess: false
            });
        }
        const singleBlog = await blog.findById(blogId);
        if (!singleBlog) {
            return res.status(404).send({
                message: 'Blog not found',
                sucess: false
            });
        }
        return res.status(200).send({
            message: 'Single blog',
            sucess: true,
            data: singleBlog
        });
    }
    catch(err){
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { blogId } = req.body;
        const exUser = await user.doesUserExist(id);
        if (!exUser) {
            return res.status(404).send({
                message: 'User not found',
                sucess: false
            });
        }
        const deletedBlog = await blog.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            return res.status(404).send({
                message: 'Blog not found',
                sucess: false
            });
        }
        return res.status(200).send({
            message: 'Blog deleted successfully',
            sucess: true
        });
    }
    catch (err) {
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
}


const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { blogId } = req.body;
        const { description, image } = req.body;
        const exUser = await user.doesUserExist(id);
        if (!exUser) {
            return res.status(404).send({
                message: 'User not found',
                sucess: false
            });
        }
        const updatedBlog = await blog.findByIdAndUpdate(blogId, { description, image });
        if (!updatedBlog) {
            return res.status(404).send({
                message: 'Blog not found',
                sucess: false
            });
        }
        return res.status(200).send({
            message: 'Blog updated successfully',
            sucess: true
        });
    }
    catch (err) {
        return res.status(500).send({ message: "internal server error", error: err, sucess: false });
    }
}

module.exports = {
    addBlog,
    getAllBlogs,
    getUserBlogs,
    deleteBlog,
    updateBlog,
    getSingleBlog
}