import { ALLOWED_ORIGINS } from "../utils/constants.js";

const socketOptions = {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ["GET", "POST"],
    credentials: true,
  },
};

export default socketOptions;
