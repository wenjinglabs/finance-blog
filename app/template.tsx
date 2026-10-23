/**
 * App Router 的 template：每次路由切换都重新挂载，触发 page-enter 动画。
 * （layout 不会重挂载，所以持久状态如语言选择不受影响。）
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
