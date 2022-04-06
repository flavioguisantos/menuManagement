interface Menu {
    _id: string
    name: string,
    relatedId?: string
}

const presenter: any = async (data: any) => {
    const resultPresenter: any = data.map((menu: any): Menu => {

        return {
            _id: menu._doc._id.toString(),
            name: menu._doc.name,
            relatedId: menu._doc.relatedId
        }

    })
    return resultPresenter
}

export default presenter