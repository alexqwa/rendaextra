const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
  { id: "7", title: "Item 7" },
]

export function Carousel() {
  return (
    <div className="w-full max-w-[1120px] mx-auto">
      {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  )
}
