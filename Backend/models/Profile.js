const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  Status: {
    type: String,
    required: true,
  },
  Skils: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  experince: [
    {
      title: {
        type: String,
        reqired: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      form: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        tyep: Boolean,
        default: false,
      },
      descritpion: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      filedofstudy: {
        type: String,
        required: true,
      },
      form: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        tyep: Boolean,
        default: false,
      },
      descritpion: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkden: {
      type: String,
    },
    instgram: {
      type: String,
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
