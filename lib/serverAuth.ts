import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from './prismadb'
//we will use the server auth in our api routes to check if we're logged in instead of rewriting this code continiously.
const serverAuth = async (req: NextApiRequest) => {  //use the server auth in our API controller, pass the req param which holds the jwt token.
    const session = await getSession({ req }); //getsession gains the user logged in session.

    if (!session?.user?.email) { //if session or user or email does not exist
        throw new Error('Not signed in') //display error
    }

    const currentUser = await prismadb.user.findUnique({ 
        where: {
            email: session.user.email
        }
    });

    if (!currentUser) { //if we don't have the current user,then show error.
        throw new Error ('Not Signed In')
    }

    return {currentUser};
};

export default serverAuth;