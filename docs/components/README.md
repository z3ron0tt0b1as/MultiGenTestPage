# Components Documentation

This section details all reusable UI components, their props, and usage examples.

---

## Button
- **File:** components/ui/button.tsx
- **Props:** children, onClick, ...props
- **Usage:**
```
<Button onClick={handleClick}>Click Me</Button>
```

## Dialog
- **File:** components/ui/dialog.tsx
- **Props:** open, onClose, children
- **Usage:**
```
<Dialog open={isOpen} onClose={closeDialog}>...</Dialog>
```

## Input
- **File:** components/ui/input.tsx
- **Props:** value, onChange, ...props
- **Usage:**
```
<Input value={value} onChange={setValue} />
```

## Label
- **File:** components/ui/label.tsx
- **Props:** children, htmlFor
- **Usage:**
```
<Label htmlFor="email">Email</Label>
```

## ScrollArea
- **File:** components/ui/scroll-area.tsx
- **Props:** children
- **Usage:**
```
<ScrollArea>...</ScrollArea>
```

## Tabs
- **File:** components/ui/tabs.tsx
- **Props:** tabs, activeTab, onTabChange
- **Usage:**
```
<Tabs tabs={tabList} activeTab={active} onTabChange={setActive} />
```
