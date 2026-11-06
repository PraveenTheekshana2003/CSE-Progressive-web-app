import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import { lessons } from '../data/education'

export default function LessonDetailPage() {
  const { lessonId } = useParams()
  const lesson = lessons.find((l) => l.id === lessonId)

  const back = (
    <Link to="/education" className="flex items-center gap-1 text-sm text-emerald-400">
      <ArrowLeft className="size-4" /> Back to lessons
    </Link>
  )

  if (!lesson) {
    return (
      <div className="space-y-4">
        {back}
        <p className="text-slate-400">Lesson not found.</p>
      </div>
    )
  }

  return (
    <article className="mx-auto w-full max-w-xl space-y-5 px-4 pb-28 pt-6">
      {back}
      <span className="text-xs font-medium text-emerald-400">{lesson.category}</span>
      <h1 className="text-2xl font-bold text-white">{lesson.title}</h1>
      <p className="flex items-center gap-1 text-xs text-slate-500">
        <Clock className="size-3" /> {lesson.minutes} min read
      </p>
      {lesson.content.map((p, i) => (
        <p key={i} className="leading-relaxed text-slate-300">{p}</p>
      ))}
    </article>
  )
}