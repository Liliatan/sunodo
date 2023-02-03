import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { FastifyTypebox } from "../../types";
import { createHandler, listHandler } from "./orgs.handlers";
import { CreateOrgSchema, ListOrgSchema } from "./orgs.schemas";

const routes: FastifyPluginAsyncTypebox = async (server: FastifyTypebox) => {
    server.post(
        "/",
        {
            schema: CreateOrgSchema,
            preValidation: server.authenticate,
        },
        createHandler
    );

    server.get(
        "/",
        {
            schema: ListOrgSchema,
            preValidation: server.authenticate,
        },
        listHandler
    );
};

export default routes;
