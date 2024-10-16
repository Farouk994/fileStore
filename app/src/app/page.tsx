"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useOrganization,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const { organization } = useOrganization();
  console.log(organization?.id);
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(
    api.files.getFiles,
    organization?.id ? { orgId: organization.id } : "skip" 
    // Meaning - don't run query until certain things are done, if not then just skip it
  );
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      {files?.map((file) => <div key={file._id}>{file.name}</div>)}
      <Button
        onClick={() => {
          if (!organization) return;
          createFile({
            name: "Hello Word",
            orgId: organization.id,
          });
        }}
      >
        Click Me
      </Button>
    </main>
  );
}
