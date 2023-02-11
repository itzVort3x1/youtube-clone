import { connect, Connection } from "@planetscale/database";

const config = {
	host: "us-east.connect.psdb.cloud",
	username: "v8pv86gq25zylt6jz29t",
	password: "pscale_pw_uODyreQj8yl8IGUlxLyjYf8zaVvBZ1PE0GoDVH0SeUg",
};

export const conn: Connection = connect(config);
