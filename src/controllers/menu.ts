import { Request, Response } from 'express'
import Menu from '../models/menu'
import createMenu from '../use_case/menu'
import searchRemoveMenu from '../use_case/removeMenu'

export default {
    create: async (req: Request, res: Response): Promise<Response> => {
        const { id } = await Menu.create(req.body)

        return res.status(201).json({
            id,
        })
    },
    getAll: async (_: Request, res: Response): Promise<Response> => {
        const menu = await Menu.find()
        if (!menu || !menu[0]?.id)
            return res.status(400).json({ message: 'Menu not found' })

        const resultCreatMenu = await createMenu(menu)
        return res.status(200).json(resultCreatMenu)
    },
    delete: async (req: Request, res: Response): Promise<Response> => {
        const menu = await Menu.find()
        if (!menu || !menu[0]?.id)
            return res.status(400).json({ message: 'Menu not found' })

        const resultRemoveMenu = await searchRemoveMenu(menu, req.params.id)
        return res.status(200).json(resultRemoveMenu)
    },
}
