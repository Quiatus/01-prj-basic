import { LineItem } from "./LineItem"

export const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="list">
      <ul>
          {items.map((item) => (
              <LineItem
                  key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ))}
      </ul>
    </div>
  )
}

