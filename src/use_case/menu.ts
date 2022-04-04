import presenter from "./presenter"

const createMenu: any = async (data: any) => {
    const newData = await presenter(data)
    const firstLevel = newData.filter((menuDad: { relatedId: any; }) => !menuDad.relatedId)
    const menu = []

    if (firstLevel.length > 0) {

        for (let i = 0; i < firstLevel.length; i++) {
            const resultRecurse = recurse(newData, firstLevel[i]._id)
            const firstElement = firstLevel[i]

            if (resultRecurse.length > 0) {

                menu.push(
                    {
                        id: firstElement._id,
                        name: firstElement.name,
                        submenus: recurse(newData, firstElement._id)
                    }
                )

            } else {

                menu.push(
                    {
                        id: firstElement._id,
                        name: firstElement.name
                    }
                )

            }

        }

    }

    return menu

}



const recurse: any = (data: any, id: string) => {
    const childMenu: any = []
    const childLevel = data.filter((menuChild: any): any => menuChild.relatedId === id)

    if (childLevel.length > 0) {

        for (let i = 0; i < childLevel.length; i++) {
            const childElement = childLevel[i];
            const resultRecurse = recurse(data, childElement._id)

            if (resultRecurse.length > 0) {

                childMenu.push(
                    {
                        id: childElement._id,
                        name: childElement.name,
                        submenus: resultRecurse
                    }
                )

            } else {

                childMenu.push(
                    {
                        id: childElement._id,
                        name: childElement.name
                    }
                )

            }
        }

        return childMenu

    } else {

        return childMenu

    }

}

export default createMenu