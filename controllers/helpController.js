const HelpModel = require("../models/helpModel.js");
const UserModel = require("../models/userModel.js");
const mongoose = require("mongoose");
// const validatePost = require("../helpers/validationPost.js");

const helpController = {
    getHelps: async (req, res) => {
        try {
            const helps = await HelpModel.find();

            res.status(200).json(helps);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getHelp: async (req, res) => {
        const { id: _id } = req.params;
        try {
            const help = await HelpModel.findById({ _id });

            res.status(200).json(help);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    createHelp: async (req, res) => {
        const user = await UserModel.findById({ _id: req.user.id }).select(
            "-password"
        );
        // console.log(user);
        const { name, email, phone, address, avatar } = user;

        const help = req.body;
        // const { error } = validatePost({ ...post, creator: req.userId });
        // // console.log(error)
        // if (error) {
        //   return res.status(400).send(error.details[0].message);
        // }

        const newHelp = new HelpModel({
            ...help,
            name: name,
            email: email,
            phone: phone,
            address: address,
            avatar: avatar,
        });

        try {
            await newHelp.save();

            res.status(201).json(newHelp);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    updateHelp: async (req, res) => {
        const { id: _id } = req.params;
        const help = req.body;

        const newHelp = { ...help, _id };

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ msg: "No post with that id" });
        }

        const existhelp = await HelpModel.findById({ _id });
        
        if(!existhelp){
            return res.status(404).json({ msg: "There is no help with that id!" });
        }

        const updatedHelp = await HelpModel.findByIdAndUpdate(_id, newHelp, {
            new: true,
        });
        return res.status(200).json(updatedHelp);
    },
    deleteHelp: async (req, res) => {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ msg: "No post with that id" });
        }

        const existhelp = await HelpModel.findById({ _id });
        
        if(!existhelp){
            return res.status(404).json({ msg: "There is no help with that id!" });
        }

        await HelpModel.findByIdAndDelete(_id);
        return res.status(200).json({
            msg: "Help succesfully deleted!",
        });
    },
};

module.exports = helpController;
