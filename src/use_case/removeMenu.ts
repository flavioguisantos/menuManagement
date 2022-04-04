import Menu from '../models/menu'
import presenter from "./presenter"

const searchRemoveMenu = async (data: any[], id: string) => {
    const newData = await presenter(data)
    const removeResult = []
    const firstLevel = newData.filter((menuDad: { _id: string }) => menuDad._id === id)

    if (firstLevel.length > 0) {
        await removeMenu(firstLevel[0]._id)
        removeResult.push({ remove: `REMOVE FIRST LEVEL ${id}` })
    }

    const resultRecurse = await recurse(newData, id)

    if (resultRecurse === 'OK') {
        removeResult.push({ remove: `REMOVE CHILD LEVEL ${id}` })
    }

    return removeResult

}

const recurse = async (data: any[], id: string) => {
    const childLevel = data.filter(((menuChild: { relatedId: any }) => menuChild.relatedId === id))

    if (childLevel.length > 0) {

        for (let i = 0; i < childLevel.length; i++) {

            const childElement = childLevel[i];
            await removeMenu(childElement._id)
            await recurse(data, childElement._id)

        }

        return 'OK'

    } else {

        return 'NOT FOUND'

    }
}

const removeMenu = async (id: any) => {

    await Menu.remove({ _id: id })

}

export default searchRemoveMenu