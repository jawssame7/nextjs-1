import { prisma } from '../../../../globals/db'
import { NextRequest, NextResponse } from 'next/server'
import { zUpsertNote } from '@/app/notes/type'

// 動的レスポンスを強制する
export const dynamic = 'force-dynamic'

// ノート一覧を取得
export async function GET() {
  // dbからデータを取得
  debugger
  const notes = await prisma.note.findMany()
  return NextResponse.json(notes)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const parcedData = zUpsertNote.parse(data)
  const note = await prisma.note.create({
    data: {
      title: parcedData.title,
      body: parcedData.body,
    },
  })
  return new NextResponse(`${note.id}`, { status: 201 })
}
