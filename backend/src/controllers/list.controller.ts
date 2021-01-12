import { Request, Response } from "express";
import List from "../models/list.model";
import { IList } from "../types/list";

const getLists = async (req: Request, res: Response): Promise<void> => {
    try {
      const lists: IList[] = await List.find();
      res.status(200).json({ lists });
    } catch (error) {
      throw error;
    }
  }

const createList = async (req: Request, res: Response) => {
    try {
    
        const list: IList = new List({
          title: req.body.title,
          taskOrder: req.body.taskOrder
        })
    
        const newList: IList = await list.save();
        const allLists: IList[] = await List.find();
    
        res.status(201).json({ 
          message: "List added", 
          List: newList, 
          Lists: allLists });

      } catch (error) {
        throw error;
      }

}

const updateList = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req;

      const updateList: IList | null = await List.findByIdAndUpdate(
        { _id: id },
        body
      );

      const allLists: IList[] = await List.find();
      res.status(200).json({
        message: "List updated",
        List: updateList,
        Lists: allLists,
      });

    } catch (error) {
      throw error;
    }
  }

  const deleteList = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedList: IList | null = await List.findByIdAndRemove(
        req.params.id
      )
      const allLists: IList[] = await List.find();
      res.status(200).json({
        message: "Todo deleted",
        List: deletedList,
        Lists: allLists,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getLists, createList, updateList, deleteList };