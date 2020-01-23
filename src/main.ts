import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as path from 'path'

async function run(): Promise<void> {
  try {

    const toolpath = path.join(process.env.GITHUB_WORKSPACE,'tools')

    await exec.exec(
      `choco install vswhere -v -y -force --cache-location=${toolpath}`
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
