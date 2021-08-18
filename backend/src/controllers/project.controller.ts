import { Request, Response } from "express";
import Project from "../models/project.model";
import { IProject } from "../types/project";

const getProjects = async(req: Request, res: Response) => {
    try {
        const projects: IProject[] = await Project.find();
        res.status(200).json({ projects
        });

    }catch(error) {
        throw error;
    }
};

export {getProjects};